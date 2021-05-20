<h2>Get In Touch</h2>
<form name="getintouch" action="https://scidroid.pythonanywhere.com/add/msg" method="POST">
    <label for="name">Name</label>
    <input
        type="text"
        name="name"
        id="name"
        autocomplete="name"
        placeholder="name"
        required
    />
    <label for="email">Email</label>
    <input
        type="email"
        name="email"
        id="email"
        autocomplete="email"
        placeholder="scidroid@scidroid.me"
        required
    />
    <label for="msg">Message</label>
    <input
        type="text"
        name="msg"
        id="msg"
        placeholder="Hi, ..."
        required
    />
    <button type="submit">Submit</button>
</form>
