/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProfileService } from "../profile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProfileCreateInput } from "./ProfileCreateInput";
import { Profile } from "./Profile";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ProfileUpdateInput } from "./ProfileUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProfileControllerBase {
  constructor(
    protected readonly service: ProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Profile })
  @swagger.ApiBody({
    type: ProfileCreateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProfile(
    @common.Body() data: ProfileCreateInput
  ): Promise<Profile> {
    return await this.service.createProfile({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Profile] })
  @ApiNestedQuery(ProfileFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async profiles(@common.Req() request: Request): Promise<Profile[]> {
    const args = plainToClass(ProfileFindManyArgs, request.query);
    return this.service.profiles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async profile(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    const result = await this.service.profile({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ProfileUpdateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProfile(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() data: ProfileUpdateInput
  ): Promise<Profile | null> {
    try {
      return await this.service.updateProfile({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProfile(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    try {
      return await this.service.deleteProfile({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
