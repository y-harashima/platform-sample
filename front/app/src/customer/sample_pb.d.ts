import * as jspb from "google-protobuf"

export class CustomerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRequest): CustomerRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRequest;
  static deserializeBinaryFromReader(message: CustomerRequest, reader: jspb.BinaryReader): CustomerRequest;
}

export namespace CustomerRequest {
  export type AsObject = {
    name: string,
  }
}

export class OwnerMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OwnerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OwnerMessage): OwnerMessage.AsObject;
  static serializeBinaryToWriter(message: OwnerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OwnerMessage;
  static deserializeBinaryFromReader(message: OwnerMessage, reader: jspb.BinaryReader): OwnerMessage;
}

export namespace OwnerMessage {
  export type AsObject = {
    message: string,
  }
}

