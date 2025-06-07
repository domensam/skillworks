"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain, MapPin, DollarSign, Clock, Users } from "lucide-react";

export function AIPreferences() {
  const [preferences, setPreferences] = useState({
    location: "",
    salary: [50000, 150000],
    workStyle: "hybrid",
    companySize: "medium",
    culture: [],
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {/* Location Preference */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Preferred Location</Label>
              <Input
                placeholder="Enter preferred location"
                value={preferences.location}
                onChange={(e) =>
                  setPreferences({ ...preferences, location: e.target.value })
                }
              />
            </div>
          </div>
        </Card>

        {/* Salary Range */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <DollarSign className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Salary Range</Label>
              <Slider
                value={preferences.salary}
                onValueChange={(value) =>
                  setPreferences({ ...preferences, salary: value })
                }
                min={30000}
                max={300000}
                step={10000}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>${preferences.salary[0].toLocaleString()}</span>
                <span>${preferences.salary[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Work Style */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Work Style</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["Remote", "Hybrid", "On-site"].map((style) => (
                  <Button
                    key={style}
                    variant={
                      preferences.workStyle === style.toLowerCase()
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        workStyle: style.toLowerCase(),
                      })
                    }
                    className="w-full"
                  >
                    {style}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Company Size */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Users className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Preferred Company Size</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["Small", "Medium", "Large"].map((size) => (
                  <Button
                    key={size}
                    variant={
                      preferences.companySize === size.toLowerCase()
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        companySize: size.toLowerCase(),
                      })
                    }
                    className="w-full"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Culture Preferences */}
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Brain className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <Label>Company Culture Preferences</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  "Fast-paced",
                  "Collaborative",
                  "Innovative",
                  "Work-life balance",
                  "Growth-focused",
                  "Diverse",
                ].map((culture) => (
                  <div key={culture} className="flex items-center space-x-2">
                    <Switch
                      id={culture}
                      checked={preferences.culture.includes(culture)}
                      onCheckedChange={(checked) => {
                        const newCulture = checked
                          ? [...preferences.culture, culture]
                          : preferences.culture.filter((c) => c !== culture);
                        setPreferences({ ...preferences, culture: newCulture });
                      }}
                    />
                    <Label htmlFor={culture}>{culture}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
