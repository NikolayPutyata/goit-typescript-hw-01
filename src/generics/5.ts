export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// const RoleDescription = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };

type RoleTranslations = Record<UserRole, string>;

const RoleDescription: RoleTranslations = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
}

