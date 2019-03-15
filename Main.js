var sounds = [
    new Audio("https://vocaroo.com/media_command.php?media=s1Qa4gqZVu5H&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1FsB6emkNx3&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1D6WYz8SGD5&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1sa8zOKOzUZ&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1aY8WlGzG8a&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s03lkrYVysqN&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s0fT1Qfp3OkQ&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1178ViygL6p&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1LEA6JnGdXG&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1nMDEeSbCst&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s1UixTPaHveU&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s12ipg2tT7oc&command=download_mp3"),
    new Audio("https://vocaroo.com/media_command.php?media=s16A80pxdsjq&command=download_mp3")
]
// eslint-disable-next-line no-unused-vars
function OnClick() {
    var num = Math.floor(Math.random() * sounds.length - 1);
    sounds[num].play();
}



