import { Country } from '../admin/country.model';
import { Messages } from '../messages/messages.model';
import { LocalStorage } from '@constants/local-storage';

export class UserAuth {
  constructor(
    public token: string = null!,
    public expiration: Date | string = null!,
    public userName: string = null!,
    public fullName: string = null!,
    public countryId: string = null!,
    public country: Country = null!,
  ) {}
}

/**
 *
 * @interface UserForLogin
 */

export class UserForLogin {
  constructor(
    public userName: string = null!,
    public password: string = null!,
    public phoneNumber: string = null!,
  ) {}
}

/**
 *
 * @class UserForRegister
 */

export class UserForRegister {
  constructor(
    public email: string = null!,
    public userName: string = null!,
    public password: string = null!,
    public confirmPassword: string = null!,
    public phoneNumber: string = null!,
    public isPhoneActive: boolean = false,
    public isArabic: boolean = true,
    public firstName: string = null!,
    public lastName: string = null!,
    public code: string = null!,
    public countryId: number = null!,
  ) {}
}

/**
 *
 * @class UserForActive
 */

export class UserForActive {
  constructor(
    public email: string = null!,
    public userName: string = null!,
    public phoneNumber: string = null!,
    public code: string = null!,
    public isArabic: boolean = true,
  ) {}
}

export class User {
  constructor(
    public id: string = '',
    public email: string = null!,
    public userName: string = null!,
    public phoneNumber: string = null!,
    public phoneNumberConfirmed: false = null!,
    public created: Date | string = null!,
    public notes: string = null!,
    public firstName: string = null!,
    public lastName: string = null!,
    public birthDay: Date | string = null!,
    public photoUrl: string = null!,
    public newPhotoUrl?: string,
    public countryId: number = null!,
    public userStatus: number = 0,
    public isActive: boolean = true,
  ) {}
}

export class UserMessages {
  constructor(
    public id: string = '',
    public name: string = null!,
    public normalizedName: string = null!,
    public concurrencyStamp: string = null!,
  ) {}
}

/**
 *
 * @class UserRole
 */

export class UserRole {
  constructor(
    public id: string = '',
    public name: string = null!,
    public normalizedName: string = null!,
    public concurrencyStamp: string = null!,
  ) {}
}

/**
 *
 * @class Role
 */

export class Role {
  constructor(
    public userId?: string,
    public roleId: string = '',
    public isAdd: boolean = true,
    public roleName: string = null!,
  ) {}
}

/**
 *
 * @class ForgotPassword
 */

export class ForgotPassword {
  constructor(
    public emailOrPhone: string = null!,
    public isArabic: boolean = true,
  ) {}
}

/**
 *
 * @class ForgotPasswordResponse
 */

export class ForgotPasswordResponse {
  constructor(
    public email: string = null!,
    public userName: string = null!,
    public phoneNumber: string = null!,
    public code: string = null!,
    public isArabic: boolean = true,
  ) {}
}

/**
 *
 * @interface ResetPassword
 */
export class ResetPassword {
  constructor(
    public code: string = null!,
    public confirmPassword: string = null!,
    public emailOrPhone: string = null!,
    public password: string = null!,
  ) {}
}

/**
 *
 * @interface ChangePassword
 */

export class ChangePassword {
  constructor(
    public oldPassword: string = null!,
    public newPassword: string = null!,
    public confirmPassword: string = null!,
  ) {}
}

/**
 *
 * @class UserForDetailed
 */

export class UserForDetailed {
  constructor(
    public notes: string = null!,
    public firstName: string = null!,
    public lastName: string = null!,
    public birthDay: Date | string = null!,
    public newPhotoUrl?: string,
    public photoUrl: string = null!,
  ) {}
}

/**
 *
 * @class MsgForAdmin
 */

export class MsgForAdmin {
  constructor(
    public msgBody: string = null!,
    public email: string = null!,
    public userName: string = null!,
  ) {}
}

/**
 *
 * @class ContactUs
 */

export class ContactUs {
  constructor(
    public name: string = null!,
    public email: string = null!,
    public subject: string = null!,
    public msgBody: string = null!,
  ) {}
}
