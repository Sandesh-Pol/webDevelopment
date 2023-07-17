<!DOCTYPE html>
<html>
<head>
  <title>Form with 6 Attributes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
    }

    .form-container {
      max-width: 600px;
      min-width: 600px;
      margin: 0 auto;
      padding: 40px;
      background-color: #fff;
      border-radius: 5px;
      animation: shadowAnimation 2s infinite;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 15px;
    }

    input[type="text"],
    input[type="email"],
    select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    input[type="submit"] {
      background-color: #4CAF50;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #45a049;
    }
    @keyframes shadowAnimation {
      0% {
        box-shadow: none;
      }
      50% {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: #fff;
      }
      100% {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="form-container">
    <form action="02display.php" method="post">
      <div class="form-group">
        <label for="name">Name :</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="age">Collage name :</label>
        <input type="text" id="age" name="age" required>
      </div>

      <div class="form-group">
        <label for="gender">Gender :</label>
        <select id="gender" name="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>


      <div class="form-group">
        <label for="message">Address :</label>
        <textarea style="width: 100%;" id="message" name="message" rows="4" required></textarea>
      </div>

      <input type="submit" value="Submit">
    </form>
  </div>
</body>
</html>
