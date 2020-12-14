function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.checkForName(formText)){
      console.log("::: Form Submitted :::")
      fetch('http://localhost:3030/test',{
        method:'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text:formText}),
      })
    .then(res => res.json())
    .then(function(res) {
      document.getElementById('irony').innerHTML = res.irony //EX non ironic
      document.getElementById('subjectivity').innerHTML = res.subjectivity // EX Ojective
      document.getElementById('confidence').innerHTML = res.confidence // EX 100
    })
  }else{
    alert('Please Enter Valid URL');
  }
}
export { handleSubmit }
