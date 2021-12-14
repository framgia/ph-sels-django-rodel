function AdminRoute({ is_admin, children }) {
  return is_admin ? <>{children}</> : null
}

export default AdminRoute
