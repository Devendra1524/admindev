import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { deviceAnalyticsChartOptions } from '@/utils/config';

interface VisitorData {
  device: string;
  visitors: number;
}

interface DeviceAnalyticsProps {
  allVisitors: VisitorData[] | null;
}

function getDeviceByVisitors(data: VisitorData[] | null, getDevice: string): number {
  if (data && data.length && data.filter((item) => item.device === getDevice).length === 0) {
    return 0;
  }

  return data && data.length
    ? data
        .filter((item) => item.device === getDevice)
        .reduce((acc, obj) => acc + obj.visitors, 0)
    : 0;
}

export default function DeviceAnalytics({ allVisitors }: DeviceAnalyticsProps) {
  const series = [
    getDeviceByVisitors(allVisitors, 'desktop'),
    getDeviceByVisitors(allVisitors, 'laptop'),
    getDeviceByVisitors(allVisitors, 'tablet'),
    getDeviceByVisitors(allVisitors, 'mobile'),
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-5">
      <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Visitor Analytics By Devices</p>
        <div className="w-full mb-2">
          <div id="deviceAnalyticsChart" className="mx-auto flex justify-center">
            <ReactApexChart
              options={deviceAnalyticsChartOptions}
              series={series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
