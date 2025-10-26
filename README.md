User opens Frontend
-> Login with email
-> Backend
-> Is EMail Whitelisted?
-> Generate MagicLink (Duration 1h)
-> Save MagicLink in Database
-> Send EMail
-> Return and show user "Maybe we sent you an EMail . takes time,check spam folder"

User opens link from email
-> Frontend sends Link to Backend
-> Check for Magic Link
-> If failure Page Ups this didn't work -> back to login
-> If Success Return JWT (1w duration)
-> Frontend has JWT so -> Query User
-> Backend returns just the email for now (from jwt, no query needed atm)
-> If Failure -> Login
-> If Success Redirect to calendar

User requests Calendar
-> Frontend has JWT
-> Asks backend for Calendar Items
-> Backend asks Baikal cal items using System account
-> Returns calendar items in correct format
-> Frontend renders