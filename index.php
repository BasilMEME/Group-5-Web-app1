<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
    exit();
}

// DB Connection
$conn = new mysqli("localhost", "root", "", "student_db2");

// Handle connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get 3 most recent students
$recentStudents = $conn->query("SELECT * FROM students ORDER BY id DESC LIMIT 3");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Balighot, Turaya, Defeo Student Management</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</head>
<body class="light-mode">

  <!-- Background Animation -->
  <div class="jdm-background">
    <div class="neon-lights"></div>
    <div class="city"></div>
    <div class="road"></div>
    <div class="car"></div>
    <div class="car"></div> <!-- Optional second car -->
  </div>

  <!-- Dark Mode & Logout Button -->
  <div class="toggle-container">
    <div class="d-flex gap-2">
      <button id="modeToggle" class="btn btn-outline-jdm">🌙 Dark Mode</button>
      <a href="logout.php" class="btn btn-outline-jdm">🚪 Logout</a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container text-center main-content">
    <h1 class="header-title animate__animated animate__fadeInDown">BALIGHOT, TURAYA, DEFEO STUDENT MANAGEMENT</h1>
    <p class="header-subtitle animate__animated animate__fadeIn animate__delay-1s">SKILLS FOR THE FUTURE</p>

    <div class="row justify-content-center g-4 mb-5">
      <div class="col-md-4 col-sm-6 animate__animated animate__fadeInLeft animate__delay-1s">
        <a href="add.php" class="btn btn-jdm w-100 py-3">
          <span class="d-block fs-4">➕</span>
          <span>ADD STUDENT</span>
        </a>
      </div>
      <div class="col-md-4 col-sm-6 animate__animated animate__fadeInRight animate__delay-1s">
        <a href="view.php" class="btn btn-jdm w-100 py-3">
          <span class="d-block fs-4">📋</span>
          <span>VIEW STUDENTS</span>
        </a>
      </div>
    </div>

    <!-- Recently Added Students -->
    <?php if ($recentStudents && $recentStudents->num_rows > 0): ?>
    <div class="recent-students mt-5 animate__animated animate__fadeInUp animate__delay-2s">
      <h2 class="section-title jdm-font">🌟 RECENTLY ADDED STUDENTS</h2>
      <div class="row justify-content-center">
        <?php while($student = $recentStudents->fetch_assoc()): ?>
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="student-card p-4">
            <div class="student-avatar mb-3">
              <?= strtoupper(substr(htmlspecialchars($student['name']), 0, 1)) ?>
            </div>
            <h5 class="student-name"><?= htmlspecialchars($student['name']) ?></h5>
            <p class="text-muted student-course"><?= htmlspecialchars($student['course']) ?></p>
            <div class="student-info">
              <small class="student-email"><?= htmlspecialchars($student['email']) ?></small>
              <small class="student-dob">DOB: <?= htmlspecialchars($student['dob']) ?></small>
            </div>
          </div>
        </div>
        <?php endwhile; ?>
      </div>
    </div>
    <?php endif; ?>
  </div>

  <script src="script.js"></script>

  <!-- Credits -->
  <div class="credits-btn">
    <button id="creditsBtn" class="btn btn-link">
      Created by: <span class="neon-text">Balighot</span>, 
      <span class="neon-text">Defeo</span>, 
      <span class="neon-text">Turaya</span>
    </button>
  </div>

  <!-- Inline Styles for Student Cards -->
  <style>
    .student-card {
      background-color: var(--card-bg);
      border-radius: 15px;
      transition: all 0.3s eas
