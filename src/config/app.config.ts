interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Course Creator'],
  customerRoles: [],
  tenantRoles: ['Course Creator', 'Course Instructor'],
  tenantName: 'Organization',
  applicationName: 'Course',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organizations',
    'Invite or remove Course Instructors to Organization',
    'Manage song writing courses',
    'Invite or remove Course Instructors to song writing courses',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5fee60de-4725-4e33-9899-1e966f1955ad',
};
