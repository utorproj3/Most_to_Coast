# Most_to_Coast

Models && Associations Relationship:
![image](https://user-images.githubusercontent.com/95199209/180568848-c4412f55-cbd9-4585-b01e-46a1eff988b9.png)

Backend Instructions, Sample Queries and Mutations (Without Seeds):
1. `cd` into the server directory from root, and enter `npm run watch` in the terminal window.
![image](https://user-images.githubusercontent.com/95199209/180853021-4ccbb44d-eae1-4e3c-a259-eacbac089194.png)

2. Navigate towards http://localhost:3001/graphql in the Chrome browser, create a User by entering the username, email and password.
![image](https://user-images.githubusercontent.com/95199209/180853710-c0af7bd1-1ec8-4f84-87ff-ed6f66b8b2e9.png)

3. Login using the email and password.
![image](https://user-images.githubusercontent.com/95199209/180853866-135f03f9-96ec-4686-b22d-21df52e7f464.png)

4. Once logged in, you can start the CRUD operations by queries (GET) and mutations (POST, DELETE, PUT).

#### GET
- To get your own information: 
![image](https://user-images.githubusercontent.com/95199209/180854317-c86806e4-38c8-4df5-a223-4cd8836d837f.png)

- To get all signed-up users:
![image](https://user-images.githubusercontent.com/95199209/180854472-2e55f50e-020e-4df4-9066-71ba5617ad07.png)

- To get all travel plans in the system:
![image](https://user-images.githubusercontent.com/95199209/180856698-38c92830-36f6-4569-8571-75d28e1a9c6f.png)

- To get travel plans belong to a user:
![image](https://user-images.githubusercontent.com/95199209/180856798-2c7b3729-d933-4b80-91b6-c55651414e62.png)

- To get travel plan by `_id`:
![image](https://user-images.githubusercontent.com/95199209/180857148-286ddae4-8791-4170-881a-83e0f75fe8b1.png)

#### POST:
- To create a travel plan: 
![image](https://user-images.githubusercontent.com/95199209/180875505-4a626501-5cb5-4544-9756-a17aae015332.png)

- To create days in the travel plan, copy the `_id` of the travel plan, and input into the variables:
![image](https://user-images.githubusercontent.com/95199209/180855990-98a0016b-db0b-460c-9253-15e68bd39654.png)

- To create an activity in the day, copy the `_id` of both the travel plan and day, then input into variables:
![image](https://user-images.githubusercontent.com/95199209/180856572-a64e7083-c42e-4ea3-9426-6868b6a42276.png)

#### PUT:
- To update a travel plan, copy the `_id` of the travel plan and input into the variables:
![image](https://user-images.githubusercontent.com/95199209/180858138-25247beb-2dc8-40fa-900a-5a8c2436f033.png)

- To update an activity, copy the `_id` of the activity and input into the variables:
![image](https://user-images.githubusercontent.com/95199209/180859841-65b712dc-ad4d-48fb-a611-f5307ed43e27.png)

- To update a user, copy the `_id` of the user and input into the variables:
![image](https://user-images.githubusercontent.com/95199209/180872904-ceb407d4-c115-40aa-9525-91f085c890ca.png)

#### DELETE:
- To remove an activity, enter the `id` of the activity and the `dayId` that activity belongs to.
![image](https://user-images.githubusercontent.com/95199209/180860910-231a8ef1-b11b-4431-b3a6-dc054f0fb1b8.png)

- To remove a day, enter the `id` of the Day, and the `planId` that day belong to.
![image](https://user-images.githubusercontent.com/95199209/180861448-26683d31-a2f4-4b5b-bf40-1647833b1194.png)

- To remove a plan, enter the `id` of the Plan.
![image](https://user-images.githubusercontent.com/95199209/180862195-adbf805a-a63e-49f8-9902-d6b751158849.png)


