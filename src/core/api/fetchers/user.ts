import instance from 'core/api/instance';
import { UpdateUser, UpdateUserPass, VerifyEmail } from 'lib/types/api/user';

export const updateMe = async ({ id, body }: UpdateUser) =>
  instance.authorized().patch(`/user/${id}`, body);

export const me = async () => instance.authorized().get('/client/user/me');

export const updatePassword = async ({ id, body }: UpdateUserPass) =>
  instance.authorized().patch(`/user/${id}`, body);

export const verifyEmail = async (body: VerifyEmail) =>
  instance.authorized().post(`/verify`, body);

export const resendVerifyCode = async () =>
  instance.authorized().post(`/resend`);
