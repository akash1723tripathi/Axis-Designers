"use client";

import { useState, useMemo } from "react";
import { CareerHero, CareerListings, jobData } from "@/components/career";
import { Footer } from "@/components/shared";

export default function CareerPage() {
      const [searchQuery, setSearchQuery] = useState("");
      const [roleFilter, setRoleFilter] = useState("All Roles");
      const [industryFilter, setIndustryFilter] = useState("All Industries");
      const [locationFilter, setLocationFilter] = useState("All Locations");

      const filteredJobs = useMemo(() => {
            return jobData.filter((job) => {
                  const matchesSearch =
                        searchQuery === "" ||
                        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.department.toLowerCase().includes(searchQuery.toLowerCase());

                  const matchesRole =
                        roleFilter === "All Roles" || job.role === roleFilter;

                  const matchesIndustry =
                        industryFilter === "All Industries" ||
                        job.industry === industryFilter;

                  const matchesLocation =
                        locationFilter === "All Locations" ||
                        job.location === locationFilter;

                  return matchesSearch && matchesRole && matchesIndustry && matchesLocation;
            });
      }, [searchQuery, roleFilter, industryFilter, locationFilter]);

      return (
            <main className="relative min-h-screen">
                  <CareerHero
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        roleFilter={roleFilter}
                        setRoleFilter={setRoleFilter}
                        industryFilter={industryFilter}
                        setIndustryFilter={setIndustryFilter}
                        locationFilter={locationFilter}
                        setLocationFilter={setLocationFilter}
                        openCount={filteredJobs.length}
                  />
                  <CareerListings jobs={filteredJobs} />
                  <Footer />
            </main>
      );
}
