import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatService } from "./chat.service";
import { ChatGrpcControllerBase } from "./base/chat.grpc.controller.base";

@swagger.ApiTags("chats")
@common.Controller("chats")
export class ChatGrpcController extends ChatGrpcControllerBase {
  constructor(protected readonly service: ChatService) {
    super(service);
  }
}
