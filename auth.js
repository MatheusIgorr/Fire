function loginAluno(event) {
  event.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  // Simulação de login - em produção, fazer requisição ao backend
  if (email && password) {
    // Salvar dados do usuário no localStorage
    localStorage.setItem("userType", "aluno")
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userName", "João Silva")
    localStorage.setItem("userId", "1")

    // Redirecionar para dashboard
    window.location.href = "aluno-dashboard.html"
  }
}

function loginAdmin(event) {
  event.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  // Simulação de login - em produção, fazer requisição ao backend
  if (email && password) {
    // Salvar dados do usuário no localStorage
    localStorage.setItem("userType", "admin")
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userName", "Admin")
    localStorage.setItem("userId", "admin1")

    // Redirecionar para dashboard
    window.location.href = "admin-dashboard.html"
  }
}

function logout() {
  localStorage.clear()
  window.location.href = "index.html"
}

function checkAuth(requiredType) {
  const userType = localStorage.getItem("userType")

  if (!userType) {
    window.location.href = "index.html"
    return false
  }

  if (requiredType && userType !== requiredType) {
    window.location.href = "index.html"
    return false
  }

  return true
}

function registerAluno(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const cpf = document.getElementById("cpf").value
  const phone = document.getElementById("phone").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirmPassword").value

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("As senhas não coincidem!")
    return
  }

  // Validate password length
  if (password.length < 6) {
    alert("A senha deve ter no mínimo 6 caracteres!")
    return
  }

  // In production, send data to backend
  // For now, simulate registration and auto-login

  // Save user data to localStorage
  localStorage.setItem("userType", "aluno")
  localStorage.setItem("userEmail", email)
  localStorage.setItem("userName", name)
  localStorage.setItem("userId", Date.now().toString())

  // Show success message
  alert("Conta criada com sucesso! Você será redirecionado para o dashboard.")

  // Redirect to dashboard
  window.location.href = "aluno-dashboard.html"
}
