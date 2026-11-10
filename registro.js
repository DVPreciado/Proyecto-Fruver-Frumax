document.getElementById('form-registro').addEventListener('submit', function (e) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const mensajeError = document.getElementById('mensaje-error');

  mensajeError.classList.add('d-none');
  mensajeError.textContent = '';

  // Validar longitud mínima de 8 caracteres
  if (password.length < 8) {
    e.preventDefault();
    mensajeError.textContent = 'La contraseña debe tener al menos 8 dígitos.';
    mensajeError.classList.remove('d-none');
    document.getElementById('password').focus();
    return;
  }

  // Validar que contenga al menos una letra minúscula
  const tieneMinuscula = /[a-z]/;
  if (!tieneMinuscula.test(password)) {
    e.preventDefault();
    mensajeError.textContent = 'La contraseña debe contener al menos una letra minúscula.';
    mensajeError.classList.remove('d-none');
    document.getElementById('password').focus();
    return;
  }

  // Validar que contenga al menos una letra mayúscula
  const tieneMayuscula = /[A-Z]/;
  if (!tieneMayuscula.test(password)) {
    e.preventDefault();
    mensajeError.textContent = 'La contraseña debe contener al menos una letra mayúscula.';
    mensajeError.classList.remove('d-none');
    document.getElementById('password').focus();
    return;
  }

  // Validar que contenga al menos un número
  const tieneNumero = /\d/;
  if (!tieneNumero.test(password)) {
    e.preventDefault();
    mensajeError.textContent = 'La contraseña debe contener al menos un número.';
    mensajeError.classList.remove('d-none');
    document.getElementById('password').focus();
    return;
  }

  // Validar que contenga al menos un carácter especial
  const tieneEspecial = /[-}{!/+@$!%*?&]/;
  if (!tieneEspecial.test(password)) {
    e.preventDefault();
    mensajeError.textContent = 'La contraseña debe contener al menos un carácter especial (ej. @, $, !, %, *, ?, &).';
    mensajeError.classList.remove('d-none');
    document.getElementById('password').focus();
    return;
  }

  // Validar que ambas contraseñas coincidan exactamente
  if (password !== confirmPassword) {
    e.preventDefault();
    mensajeError.textContent = 'Las contraseñas no coinciden. Por favor, revísalas.';
    mensajeError.classList.remove('d-none');
    document.getElementById('confirmPassword').focus();
    return;
  }
});
