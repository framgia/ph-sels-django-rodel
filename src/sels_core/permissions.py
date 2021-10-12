from rest_framework import permissions

class IsAdminUser(permissions.BasePermission): 
  """
  Check User permission per equivalent action for users data
  """
  def has_permission(self, request, view):
    isAdmin = True if (request.user.is_authenticated and request.user.is_admin) else False

    if view.action == 'list':
      return isAdmin
    elif view.action == 'create':
      return True
    elif view.action in ['retrieve', 'update', 'partial_update', 'destroy']:
      return True
    else:
      return False
                                                                                              
  def has_object_permission(self, request, view, obj):
    if not request.user.is_authenticated:
      return False

    if view.action == 'retrieve':
      return obj == request.user.is_authenticated or request.user.is_admin
    elif view.action in ['update', 'partial_update']:
      return obj == request.user.is_authenticated or request.user.is_admin
    elif view.action == 'destroy':
      return request.user.is_admin
    else:
      return False


class IsAdminOrReadonly(IsAdminUser):
  """
  Allows access to admin users otherwise readonly.
  """
  def has_permission(self, request, view):
    is_admin = bool(request.user and request.user.is_admin)
    return bool(request.method == permissions.SAFE_METHODS or is_admin)