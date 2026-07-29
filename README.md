# Medical Appointment Booking

StayHealthy is a responsive React front-end for finding doctors, booking appointments, managing profiles, receiving appointment notifications, and submitting consultation reviews.

## Features
- Registration and login through `/api/auth/register` and `/api/auth/login`
- Secure token returned as `authtoken`
- Doctor search by name or specialty
- Appointment booking and cancellation
- Application-wide notification component
- Profile view and edit form
- Review form disabled after submission
- SEO meta tags
- Production build output in `server/build`

## Setup
```bash
git clone https://github.com/farrelgaska/med_appt.git
cd med_appt
npm install
npm start
```
Open `http://localhost:5173`.

## Production build
```bash
npm run build
npm run server
```
The production files are generated inside `server/build`.

## API test
```bash
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name":"Farrel Gaska","email":"farrel@example.com","phone":"081234567890","password":"password123","role":"patient"}'
curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"farrel@example.com","password":"password123"}'
```
