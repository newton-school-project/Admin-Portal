import { NextResponse } from "next/server";
import dbConnect from "../../../../libs/database/dbconnect";
import activityModel from "../../../../libs/database/models/activityModel";
// import activityModel from "@/models/eventsModel";

export async function POST(req) {
  await dbConnect();
  try {
    const eventData = await req.json();
    if (eventData?.type == "activation") {
      var curevent = await activityModel.findById(eventData.id);
      if (
        (curevent?.registrationForm?.sequence &&
          curevent?.registrationForm?.sequence[0]) ||
        curevent.Activated
      ) {
        await activityModel.findByIdAndUpdate(eventData.id, {
          Activated: !curevent.Activated,
        });
        return NextResponse.json(
          { message: "Success", status: true },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "Please add a registration form first", status: false },
          { status: 200 }
        );
      }
    } else if (eventData?.type == "bannerActive") {
      var curevent = await activityModel.findById(eventData.id);
      if (
        (curevent?.registrationForm?.sequence &&
          curevent?.registrationForm?.sequence[0]) ||
        curevent.ActivatedForCarousel
      ) {
        await activityModel.findByIdAndUpdate(eventData.id, {
          ActivatedForCarousel: !curevent.ActivatedForCarousel,
        });
        return NextResponse.json(
          { message: "Success", status: true },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "Please add a registration form first", status: false },
          { status: 200 }
        );
      }
    }
    console.log(eventData);
  } catch (error) {
    return NextResponse.json(
      { message: error.message, status: false },
      { status: 400 }
    );
  }
}

// export async function GET(req) {
//   await dbConnect();
//   try {
//     const events = await activityModel.find();
//     // console.log(events);
//     return NextResponse.json({ events, status: true }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message, status: false },
//       { status: 400 }
//     );
//   }
// }

// export async function PUT(req) {
//   await dbConnect();
//   try {
//     const eventData = await req.json();
//     var updatedEvent;
//     for (const el of Object.keys(eventData)) {
//       await activityModel.findByIdAndUpdate(el, eventData[el], {
//         new: true,
//       });
//     }

//     // const { _id } = eventData;

//     // if (!updatedEvent) {
//     //   return NextResponse.json(
//     //     { message: "Event not found", status: false },
//     //     { status: 404 }
//     //   );
//     // }
//     return NextResponse.json(
//       { message: "Event updated", status: true, event: updatedEvent },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message, status: false },
//       { status: 400 }
//     );
//   }
// }

// export async function DELETE(req) {
//   await dbConnect();
//   try {
//     // const { _id } = await req.json();
//     var url = new URL(req.url);
//     const deletedEvent = await activityModel.findByIdAndDelete({
//       _id: url.searchParams.get("id"),
//     });
//     if (!deletedEvent) {
//       return NextResponse.json(
//         { message: "Event not found", status: false },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json(
//       { message: "Event deleted", status: true },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message, status: false },
//       { status: 400 }
//     );
//   }
// }
