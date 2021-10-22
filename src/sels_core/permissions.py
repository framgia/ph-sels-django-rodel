from rest_framework import permissions


class IsAdminUser(permissions.BasePermission):
    """
    Allows access only to admin users.
    """

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_admin)


class IsAdminOrReadonly(permissions.BasePermission):
    """
    The request is admin user, or is a read-only request.
    """

    def has_permission(self, request, view):
        has_admin_permission = request.user and request.user.is_admin
        return bool(request.method in permissions.SAFE_METHODS or has_admin_permission)
