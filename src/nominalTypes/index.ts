export type UserID = string & { readonly brand: unique symbol };

export function getUserByUserId(userId: UserID): UserID {
  return userId;
}

export function UserID(id: string): UserID {
  return id as UserID;
}

getUserByUserId(UserID('1'));
