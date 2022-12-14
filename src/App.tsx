import { Box, ThemeProvider, Typography, CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { appTheme } from './config/theme'
import { CreateCastMembers } from './features/cast/CreateCastMembers'
import { EditCastMembers } from './features/cast/EditCastMembers'
import { ListCastMembers } from './features/cast/ListCastMembers'
import { CreateCategory } from './features/categories/CreateCategory'
import { EditCategory } from './features/categories/EditCategory'
import { ListCategory } from './features/categories/ListCategory'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          component="main"
          sx={{
            height: '100vh',
            backgroundColor: (theme) => theme.palette.grey[900],
          }}
        >
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<ListCategory />} />

              {/* Category */}
              <Route path="/categories" element={<ListCategory />} />
              <Route path="/categories/create" element={<CreateCategory />} />
              <Route path="/categories/edit/:id" element={<EditCategory />} />

              {/* Cast member */}
              <Route path="/cast-members" element={<ListCastMembers />} />
              <Route
                path="/cast-members/create"
                element={<CreateCastMembers />}
              />
              <Route
                path="/cast-members/edit/:id"
                element={<EditCastMembers />}
              />

              <Route
                path="*"
                element={
                  <Box sx={{ color: 'white' }}>
                    <Typography variant="h1">404</Typography>
                    <Typography variant="h2">Page not found</Typography>
                  </Box>
                }
              />
            </Routes>
          </Layout>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
export default App
