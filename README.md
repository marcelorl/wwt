# Wwt

## Commands

ps. you need docker installed
```bash
# Start up the project, both backend and frontend
npm start

# migration commands ran
npx typeorm migration:create src/migrations/CarTable
npx typeorm migration:run -d src/components/data.source
```

## Technologies used

 - NX

### Backend

 - nestjs
 - typeorm

## Frontend

 - vitejs
 - mui/material
 - formik
 - yup
 - react-query
 - axios
