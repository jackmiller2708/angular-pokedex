
# Data Management Module

This section is titled `Data Management Module` for it contains the application-wide code that will be used to manage and handle most of the data circulating the system.

## Overview

This folder consists of all the global data-related dependencies, this includes:

1. interfaces - contains all global interfaces
    - application - all interfaces that belongs to the application logic.
    - domain - all interfaces that belongs to the business logic.
    - dtos - all interfaces that represents data being returned from the API.
2. Models - contains all global Models
    - application - all Models that belongs to the application logic.
    - domain - all Models that belongs to the business logic.
3. services - contains all global services
    - application - all services that belongs to the application logic.
    - domain - all services that belongs to the business logic.

---
## 1. `Models` Update Procedure

The `Models` and the `DTOs` are somewhat related to one another, but `DTOs` are not a _direct dependencies_ of the `Models`. Which means the `Models` can be updated based on the needs of the application without having to worry about the mismatch in interface between them and the `DTOs`.

> However, please note that the bridge that connects the `DTOs` and the `Models` is the `adaptor` function, which acts as a middleware that adapts the `DTOs` for the application model system.

When updating `Models`, the following procedure should be taken into consideration:

1. Think of the needs and how it would fit into the system in a cohesive manner
2. Check to see if there are any relating `Models`/`Interfaces` (dependencies) that could potentially be affected by the changes.
3. Update the dependencies accordingly and then make the final updates to the models to reflect the changes.
4. Update the `adaptor` function of the model if necessary. <-- __IMPORTANT!__