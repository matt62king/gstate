# Gstate

## Overview

Simple state management for angular applications. 

Goal is provide tools that can propagate state throughout an application with minimal set up. 

Our state model is based off of suppliers and consumers. Suppliers will provide the state and 
consumers will use it.

All supplier/consumer operations can be implement with decorated functions from anywhere in the 
application.

## Usage

Gstate is functional based. There is no need for state or action classes. Unless you want to 
implement some to centralize code. The design is that any component, directive, pipe, or service
can supply or consume whatever parts of the state it needs.

### Set Up

Set up is supper easy:

Step One:

``npm install grippio-gstate``

Step Two:

Add the following to app.module.ts imports ```GstateModule.forRoot()```

Done. Your app is ready to implement state.

### Keys

Suppliers and Consumers both use keys. A key is just a string that links suppliers and consumers
together. 

---

### Consumers

There are two basic consumers decorators: Consumers and Pull:

#### @Consumer

@Consumer is property decorator that takes one argument and is applied to an Observable type.

```
@Consumer('key')
stateObject$: Observable<State>;
```

Every time a supplier action happens for 'key' this property will get and ```next()``` call with 
the supplied value.

#### @Pull

@Pull is a function decorator that takes two arguments. It will get the current object for a key and 
assign it to a property. 

```
pulledState: State;

@Pull('key', 'pulledState') pullValue = (): any => this.showPulledState = !this.showPulledState;
```

In the above case the state value of 'key' would be assigned to the 'pulledState' property. The
function will be ran after the property assignment is made. Return values are not used by the library.

Properties assigned with @Pull will not update when the state changes

---

### Suppliers

There are three basic supplier operation: Set, Patch, and Push. Each one of these can be implemented 
as decorated functions.

#### @Set

@Set is function decorator that takes one argument. 

```
 @Set('key') setState = (): State => ({string1: 'one', string2: 'two'});
```

The return value of the function will be assigned to 'key' and it will be sent to all interested
consumers. (```@Consumer('key')```) as a ```next()```.

If 'key' has an existing value it will be replaced.

#### @Patch

@Patch is a function decorator that takes one argument.

```
@Patch('key') patchState = (value: string): Partial<State> => ({string1: value});
```

Patch will expect a return value of a Partial type. It can used to update part of a object. The
returned value will update the existing object assigned to 'key' and the update will be sent to
all interest consumers. (```@Consumer('key')```) as a ```next()```.

If no object exists for 'key' one will be created with the available properties and ```undefined ```
for the rest.

### @Push

@Push is a function decorator that takes one argument.

```
@Push('key') pushState = (): any => {};
```

Push will simply dispatch the current state to all interested consumers. (```@Consumer('key')```) as a ```next()```.
No updates are made to the state. Function is ran after the ```next()``` call and any return value of the function is 
ignored by the library.

### Demo

See ```fetcher.component.ts``` and ```fetch-test.service.ts``` for a simple demo of GState.
