import { WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway(82, { namespace: 'chat'})
export class ChatGateway {

}