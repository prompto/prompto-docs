import React from 'react';
import TextType from "./TextType";
import IntegerType from "./IntegerType";
import DecimalType from "./DecimalType";
import BooleanType from "./BooleanType";
import CharacterType from "./CharacterType";
import DateType from "./DateType";
import TimeType from "./TimeType";
import DateTimeType from "./DateTimeType";
import PeriodType from "./PeriodType";
import UuidType from "./UuidType";
import BlobType from "./BlobType";
import ImageType from "./ImageType";
import VersionType from "./VersionType";
import Topic from "../../../content/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Atomic types", [ TextType, IntegerType, DecimalType, BooleanType, CharacterType,
                                DateType, TimeType, DateTimeType, PeriodType,
                                UuidType, VersionType, BlobType, ImageType ]);
    }

    renderContent(topicSelected) {
        return <div>
                <h2>Atomic data types</h2>

                <p>Atomic data types are technical types which can hold a single 'atomic' data value: text, number, date and so forth.<br/>
                    All atomic data types are defined by Prompto, there is no way to define custom atomic types in Prompto.<br/>
                    Atomic data types can be stored.
                </p>
                <p>Prompto defines the following atomic types:</p>
                <ul>
                    <li>Text</li>
                    <li>Integer</li>
                    <li>Decimal</li>
                    <li>Boolean</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>DateTime</li>
                    <li>Period</li>
                    <li>Uuid</li>
                    <li>Version</li>
                    <li>Blob</li>
                    <li>Image</li>
                </ul>
            </div>;
    }

}

export default new ThisTopic();