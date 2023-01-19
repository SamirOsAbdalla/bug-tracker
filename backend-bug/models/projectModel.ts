
import { Schema, model, Model } from "mongoose"
import { kStringMaxLength } from "buffer"



interface CommentType {
    message: string,
    author: string,
    timeCreated: string
}

interface TicketType {
    author: string,
    title: string,
    description: string,
    issueType: string,
    priority: string,
    status: string,
    timeCreated: string,
    comments: CommentType[]
}

interface ProjectType {
    name: string,
    description: string,
    teamMembers: string[],
    tickets: TicketType[]
}

type ProjectModel = Model<ProjectType>
const projectSchema = new Schema<ProjectType, ProjectModel>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teamMembers: {
        type: [{ type: String }],
        required: true,
        default: []
    },
    tickets: {
        type: [
            {
                author: String,
                title: String,
                description: String,
                issueType: String,
                priority: String,
                status: String,
                timeCreated: String,
                comments: [
                    {
                        message: String,
                        author: String,
                        timeCreated: String
                    }
                ]
            }
        ],
        required: true,
        default: []
    }
})

const ProjectModel = model<ProjectType>("Project", projectSchema)
export default ProjectModel