import { z } from 'zod';
import type { CompanyId, TaskId, UserId } from '../commonTypesWithClient/ids';

const createIdParser = <T extends string>() => z.string() as unknown as z.ZodType<T>;

export const userIdParser = createIdParser<UserId>();

export const taskIdParser = createIdParser<TaskId>();

export const companyIdParser = createIdParser<CompanyId>();
