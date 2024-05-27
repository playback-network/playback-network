import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'medias',
  access: (allow) => ({
    'submitted/{entity_id}/*': [
      // anyone can submit files:
      allow.guest.to(['read', 'write']),

      // only owners can delete theirs:
      allow.entity('identity').to(['read', 'write', 'delete']),

      // admins can also delete:
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});
