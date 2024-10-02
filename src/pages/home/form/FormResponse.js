import { FcPlanner } from "react-icons/fc";
import LottiFile from "./LottiFile";
import { MdEditCalendar } from "react-icons/md";
import { memo, useMemo } from "react";


function FormResponse({response}){
    const renderIcon = (sentence) => {
        if (sentence.includes("Day")) {
          return <FcPlanner fontSize="2rem" />;
        }if(sentence.includes("Planning")){
          return <LottiFile />;
        }
      };
    return(
        <div
            id="response"
            dir="ltr"
            className="my-3 bg-light-subtle border rounded"
            >
            <h5 className="d-flex mx-4  align-items-center">
                <span className="px-2 align-baseline">
                <MdEditCalendar fontSize="1.6rem" />
                </span>
                <span className="planer-title align-bottom">
                Travel Planner
                </span>
            </h5>
            {useMemo(() => {
                return response.length > 0 &&
                    response[0].split("###").map((sentence, index) => {// Split the first item in response on "###" and map over resulting sentences
                        let newLines = sentence.split(/\*\*/).map((line, lineIndex) => { // Split the sentence on "**" and map over resulting lines
                            let styledLine = line.replace(/\b(Morning:|Afternoon:|Evening:|Accommodation:)/g, match => // Replace matching words with styling
                                `<span style="color: #e60927; margin:20px 0px; border-radius:0.5rem; font-weight: bold;">${match}</span>`
                            );

                            return (
                            <p 
                                key={lineIndex} // Set a unique key for each line
                                className="planer-text border-end border-5 border-dark-subtle lh-sm border-left px-3 fs-6 m-0" 
                                dangerouslySetInnerHTML={{__html: styledLine}}
                            ></p>
                            );
                        });

                        return (
                            <div
                                className="planer-container rounded mx-4 my-2 px-3"
                                key={index} // Set a unique key for each container
                            >
                                {renderIcon(sentence)}
                                {newLines}
                            </div>
                        );
                    });
                }, [response])}
            </div> 
    )
}
export default memo(FormResponse);