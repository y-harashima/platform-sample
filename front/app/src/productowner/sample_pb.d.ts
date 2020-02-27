import * as jspb from "google-protobuf"

export class ProductOwnerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductOwnerRequest): ProductOwnerRequest.AsObject;
  static serializeBinaryToWriter(message: ProductOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductOwnerRequest;
  static deserializeBinaryFromReader(message: ProductOwnerRequest, reader: jspb.BinaryReader): ProductOwnerRequest;
}

export namespace ProductOwnerRequest {
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

