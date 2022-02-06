function Modulo() {
  // Variabili associate ai campi del modulo
  var fname = document.modulo.fname.value;
  var lname = document.modulo.lname.value;
  var email = document.modulo.email.value;
  var business = document.modulo.business.value;
  var website = document.modulo.website.value;
  var needs = document.modulo.needs.value;
  var hear = document.modulo.hear.value;

  var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
  var fname_reg_exp = /^[A-Za-z ]{2,30}$/;
  var lname_reg_exp = /^[A-Za-z ]{2,30}$/;

  // Espressione regolare dell'email
  if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
    alert("please provide a valid email!");
    document.modulo.email.select();
    return false;
  }
  //Effettua il controllo sul campo NOME
  else if (!fname_reg_exp.test(fname) || (fname == "") || (fname == "undefined")) {
    alert("please provide your first name correctly!");
    document.modulo.fname.select();
    return false;
  }
  //Effettua il controllo sul campo COGNOME
  else if (!lname_reg_exp.test(lname) || (lname == "") || (lname == "undefined")) {
    alert("please provide your last name correctly!");
    document.modulo.lname.select();
    return false;
  }
  //Effettua il controllo sul campo NEEDS
  else if ((needs == "") || (needs == "undefined")) {
    alert("please provide informations about your design needs!");
    document.modulo.needs.focus();
    return false;
  }
  //INVIA IL MODULO
  else {
    document.modulo.action = "elabora_dati.asp";
    document.modulo.submit();
  }
}
