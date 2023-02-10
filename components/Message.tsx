/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isChatPGT =
    message._document.data.value.mapValue.fields.user.mapValue.fields.name
      .stringValue == "ChatPGT";

  return (
    <div className={`py-5 text-white ${isChatPGT && "bg-[#434654]"}`}>
      <div className="flex space-x-3 md:space-x-5 px-3 md:px-10 md:max-w-2xl mx-auto">
        <img
          className="h-8 w-8"
          src={
            message._document.data.value.mapValue.fields.user.mapValue.fields
              .avatar.stringValue
          }
          alt="profile-poct"
        />
        <p className="pt-1 text-sm">
          {message._document.data.value.mapValue.fields.text.stringValue}
        </p>
      </div>
    </div>
  );
};

export default Message;
