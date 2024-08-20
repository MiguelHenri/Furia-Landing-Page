from app import app, db
from models.Admin import Admin
from config import AdminConfig
from werkzeug.security import generate_password_hash

# Flask context is required
with app.app_context():
    # Checking if superadmin already exists
    superadmin = Admin.query.filter_by(username=AdminConfig.SUPER_ADMIN_USERNAME).first()
    if not superadmin:
        superadmin = Admin(
            username=AdminConfig.SUPER_ADMIN_USERNAME,
            password_hash=generate_password_hash(AdminConfig.SUPER_ADMIN_PASSWORD)
        )
        db.session.add(superadmin)
        db.session.commit()
        print('Superadmin created.')
    else:
        print('Superadmin already exists.')