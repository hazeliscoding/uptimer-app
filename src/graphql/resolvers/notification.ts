import { INotificationDocument } from '../../interfaces/notification.interface';
import { AppContext } from '../../server/server';
import { getAllNotificationGroups } from '../../services/notification.service';
import { authenticateGraphQLRoute } from '../../utils/utils';

export const NotificationResolver = {
  Query: {
    async getUserNotificationGroups(
      _: undefined,
      { userId }: { userId: string },
      contextValue: AppContext
    ) {
      const { req } = contextValue;
      authenticateGraphQLRoute(req);
      const notifications: INotificationDocument[] =
        await getAllNotificationGroups(parseInt(userId));
      return { notifications };
    },
  },
};