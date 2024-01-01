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
import { ChatService } from "../chat.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChatCreateInput } from "./ChatCreateInput";
import { Chat } from "./Chat";
import { ChatFindManyArgs } from "./ChatFindManyArgs";
import { ChatWhereUniqueInput } from "./ChatWhereUniqueInput";
import { ChatUpdateInput } from "./ChatUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChatControllerBase {
  constructor(
    protected readonly service: ChatService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Chat })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createChat(@common.Body() data: ChatCreateInput): Promise<Chat> {
    return await this.service.createChat({
      data: {
        ...data,

        initiator: data.initiator
          ? {
              connect: data.initiator,
            }
          : undefined,

        responder: data.responder
          ? {
              connect: data.responder,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        initiator: {
          select: {
            id: true,
          },
        },

        responder: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Chat] })
  @ApiNestedQuery(ChatFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chats(@common.Req() request: Request): Promise<Chat[]> {
    const args = plainToClass(ChatFindManyArgs, request.query);
    return this.service.chats({
      ...args,
      select: {
        createdAt: true,
        id: true,

        initiator: {
          select: {
            id: true,
          },
        },

        responder: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chat(
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<Chat | null> {
    const result = await this.service.chat({
      where: params,
      select: {
        createdAt: true,
        id: true,

        initiator: {
          select: {
            id: true,
          },
        },

        responder: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateChat(
    @common.Param() params: ChatWhereUniqueInput,
    @common.Body() data: ChatUpdateInput
  ): Promise<Chat | null> {
    try {
      return await this.service.updateChat({
        where: params,
        data: {
          ...data,

          initiator: data.initiator
            ? {
                connect: data.initiator,
              }
            : undefined,

          responder: data.responder
            ? {
                connect: data.responder,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          initiator: {
            select: {
              id: true,
            },
          },

          responder: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Chat",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChat(
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<Chat | null> {
    try {
      return await this.service.deleteChat({
        where: params,
        select: {
          createdAt: true,
          id: true,

          initiator: {
            select: {
              id: true,
            },
          },

          responder: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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
