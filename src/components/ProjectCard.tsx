import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    title: string;
    description: string;
    repoLink?: string; // optional GitHub link
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, repoLink }) => (
    <Card className="hover:shadow-2xl transition-shadow rounded-2xl">
        <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Only render the button if a repoLink exists */}
            {repoLink && repoLink.trim() !== "" && (
                <Button
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => window.open(repoLink, "_blank", "noopener,noreferrer")}
                >
                    View Details
                </Button>
            )}
        </CardContent>
    </Card>
);

export default ProjectCard;