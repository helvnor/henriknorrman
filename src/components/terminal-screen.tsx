import Image from "next/image";

import screenImg from "/public/screen.svg";
import { courier } from "../app/fonts";
import { CommandAction } from "@/actions";

interface TerminalScreenProps {
  prompt: React.ReactElement;
  outputs: CommandAction[];
  inputRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function TerminalScreen({
  prompt,
  outputs,
  inputRef,
  formRef,
  submitHandler,
}: TerminalScreenProps) {
  const renderedOutputs = outputs.map(
    ({ id, input, output }: CommandAction) => {
      return (
        <div
          className={`flex flex-col gap-y-0.5 font-thin ${courier.className}`}
          key={id}
        >
          <p>
            {prompt}
            {input}
          </p>
          {output !== "" && <p className="">{output}</p>}
        </div>
      );
    }
  );

  return (
    <div
      className="flex justify-center items-center text-[1.77vw] md:text-xs lg:text-sm pt-16 sm:pt-0 pb-[18ch] w-full"
      onClick={() => {
        inputRef!.current!.focus();
      }}
    >
      <div className="flex z-30 justify-center items-center absolute pointer-events-none">
        <div className="w-[100vw] overflow-hidden">
          <div className="relative w-[240ch] -ml-[calc(120ch-50vw)] aspect-square pointer-events-none select-none -mt-[41ch]">
            <Image alt="" src={screenImg} fill />
          </div>
        </div>
      </div>
      <div
        className={`${courier.className} z-40 px-[1.5ch] py-[0.5ch] mb-[13ch] bg-slate-800 text-slate-200 flex items-end w-full md:w-[103ch] leading-snug tracking-wide overflow-hidden h-[57ch] rounded-none md:rounded-md`}
      >
        <form ref={formRef} onSubmit={submitHandler} className="select-text">
          <pre className="space-y-[0.25ch]">{renderedOutputs}</pre>
          <div className="flex flex-row items-end justify-start">
            {prompt}
            <input
              ref={inputRef}
              className="bg-transparent w-full sm:w-[80ch] outline-none mt-[0.25ch]"
              name="cmd"
              type="text"
            />
          </div>
          {/* <div
            className={`${hand.className} text-center hidden md:block absolute translate-y-[13.5ch] translate-x-[7ch] text-base lg:text-lg text-black w-[14ch] lg:w-[15ch] tracking-wider`}
          >
            <p>type &quot;help&quot;</p>
            <p>for commands</p>
          </div> */}
        </form>
      </div>
    </div>
  );
}
