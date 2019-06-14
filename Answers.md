1.  Explain the differences between `client-side routing` and `server-side routing`.

With server-side routing, the client has to download a new webpage from the server every time they click a link.
With client-side routing, the web application processes and renders the new data for the client when a link is clicked.
Client-side routing requires all assets to be initialized, meaning the initial load time may take slightly longer than server-side routing depending on the size of the application.
However, because the application is handling all of the link requests as state changes, the page is dynamically faster than server-side routing due to it not having to make requests to the server every time a link is clicked.

1.  What does HTTP stand for?

Hyper Text Transfer Protocol

2.  What does CRUD stand for?

Create, Read, Update, Delete

3.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C-Post, R-Get, U-Put, D-Delete

4.  Mention three tools we can use to make AJAX requests

axios, HTTP methods, Promises