
This folder contains all the global data-related dependencies, this includes:

1. interfaces - contains all global interfaces
    - application - all interfaces that belongs to the application logic.
    - domain - all interfaces that belongs to the business logic.
    - dtos - all interfaces that represents data being returned from the API.
2. models - contains all global models
    - application - all models that belongs to the application logic.
    - domain - all models that belongs to the business logic.
3. services - contains all global services
    - application - all services that belongs to the application logic.
    - domain - all services that belongs to the business logic.

---
## 1. Update Models Procedure
Due to the fact that this application models are mapped with the DTOs from the server so by default there should be steps to follow when updating models:
  1. Start with the DTOs in `./interfaces/dtos` folder, update the desired DTOs
  2. Move to `./interfaces/domain` folder, update the related interfaces
  3. Move to `./models/domain` folder, update the related models