import {
  Business,
  DateRange,
  ExpandLess,
  ExpandMore,
  Place,
} from "@mui/icons-material";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Collapse,
  Button,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Education } from "../../features/firebase/models/profile.model";

type Props = {
  education: Education;
};

export const EducationItemComponent: React.FC<Props> = ({ education }) => {
  const t = useTranslations("education");

  return (
    <Card sx={{ display: "flex", marginBottom: "10px" }} className="card">
      <CardMedia
        component="img"
        sx={{ height: 64, width: 64, margin: "8px 0 0 8px" }}
        image={education.image}
        alt={education.university}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "4px 8px !important",
            minHeight: "80px",
          }}
        >
          <Typography component="h3" variant="h3">
            {education.university}
          </Typography>
          <Box
            display="flex"
            color="text.secondary"
            alignItems="center"
            flexWrap="wrap"
          >
            {education.level && (
              <Chip
                icon={<Business />}
                label={education.level}
                size="small"
                variant="medium"
              />
            )}
            {education.duration && (
              <Chip
                icon={<DateRange />}
                label={education.duration}
                size="small"
                variant="medium"
              />
            )}
            {education.location && (
              <Chip
                icon={<Place />}
                label={education.location}
                size="small"
                variant="medium"
              />
            )}
          </Box>
          <Typography>
            {education.topic}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};