# 📌 Events Module

An **Events Module** built using the **MERN stack**, to streamline event sharing and participation within the organization.

## 🚀 Features

- **Event Creation**: Only authorized users (HR/Admin) can create events.
- **Event Details**: Displays event name, description, and organizer details.
- **Photo Upload**: Attendees can upload images with captions under each event.
- **Instant Preview**: Images appear immediately while being stored securely in **AWS S3**.
- **User-Friendly Interface**: Employees can easily browse and interact with events.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js & Express.js
- **Database**: MongoDB Atlas
- **Storage**: AWS S3 for image storage
- **State Management**: Redux Toolkit
- **Authentication**: JWT-based authentication

## 📂 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/events-module.git
   cd events-module
   ```

2. Install dependencies:
   ```bash
   # For backend
   cd server
   npm install

   # For frontend
   cd ../client
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` folder with:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     AWS_ACCESS_KEY_ID=your_aws_access_key
     AWS_SECRET_ACCESS_KEY=your_aws_secret_key
     S3_BUCKET_NAME=your_s3_bucket_name
     ```

4. Run the application:
   ```bash
   # Start backend
   cd server
   npm start

   # Start frontend
   cd ../client
   npm start
   ```

5. Open your browser and go to `http://localhost:5173/`.

## 📷 Screenshots
![Screenshot from 2025-03-31 15-20-29](https://github.com/user-attachments/assets/b6da7efc-0fb0-45e6-91bf-34754cf093d1)
![Screenshot from 2025-03-31 15-20-39](https://github.com/user-attachments/assets/ddc5ff04-22d1-4370-bfb8-6a4cd6da2bb1)
![Screenshot from 2025-03-31 15-21-02](https://github.com/user-attachments/assets/48b8923d-3bd4-48c9-a29e-e5e29e9cef7b)


## 🏗️ Future Enhancements
- Implement event notifications.
- Improve UI/UX with more animations and filters.

## 🤝 Contributing
Feel free to fork this repository, open issues, and submit pull requests. All contributions are welcome!

## 📜 License
This project is licensed under the MIT License.

---

### 💡 Let's Connect!
If you have any feedback or suggestions, feel free to reach out or contribute! 🚀
