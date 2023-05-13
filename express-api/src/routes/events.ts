import {Router} from "express";
import {OrgEvent} from "../models/orgEvent";

const router: Router = Router();

router.get("/", (req, res) => {
    const orgEvents: OrgEvent[] = [
        {
            name: "Fake Event 1",
            location: "Way down yonder",
            description: "A real hoedown",
        },
        {
            name: "Fake Event 2",
            location: "Kentucky",
            description: "Finger lickin good time",
        },
        {
            name: "Fake Event 3",
            location: "Canada",
            description: "Oh Canada, where they are afraid of the dark",
        },
    ];
    res.send(orgEvents);
});
router.get("/all", (req, res) => {
    const orgEvents: OrgEvent[] = [
        {
            name: "Fake Event 1",
            location: "Way down yonder",
            description: "A real hoedown",
        },
        {
            name: "Fake Event 2",
            location: "Kentucky",
            description: "Finger lickin good time",
        },
        {
            name: "Fake Event 3",
            location: "Canada",
            description: "Oh Canada, where they are afraid of the dark",
        },
    ];
    res.send(orgEvents);
});

export default router;