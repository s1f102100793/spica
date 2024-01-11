import { employeeUseCase } from '$/useCase/employeeUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ params: { employeeId }, body }) => {
    let iconUrl: Buffer | string;
    if (typeof body.iconUrl === 'string') {
      iconUrl = body.iconUrl;
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      iconUrl = await body.iconUrl.toBuffer();
    }
    const result = await employeeUseCase.save(employeeId, body.name, body.email, iconUrl);
    return { status: 200, body: result };
  },
}));
