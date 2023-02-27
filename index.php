<?php
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
header('Location: ./index.html');
?>