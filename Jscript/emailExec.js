
    function execFile() {
        WshShell = new ActiveXObject("WScript.Shell");
        WshShell.Run("/Jscript/contact.js", 1, false);
        } 
