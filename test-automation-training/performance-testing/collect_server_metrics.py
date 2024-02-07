import psutil
import sys
import time

import pandas as pd

#NOTE: file which I run on the server to see the performance there. 
# psutil collects metrics on this device, but these metrics are intended to be collected on the server to see the effect of the load
# this script does little here, but just and an example whta data I collect on the server.

class CollectMetrics():
    # more metrics possible, but this should be most important (?) and easy to decipher

    def cpu_percent(self):
        return psutil.cpu_percent(interval=1)

    def memory_percent(self):
        return psutil.virtual_memory()[2]

    def bandwith(self):
        network_stats = psutil.net_io_counters()
        return network_stats.bytes_sent, network_stats.bytes_recv

def main():
    #parse command line arguments:
    if len(sys.argv) != 2:
        sys.exit(1)

    try:
        time_interval = int(sys.argv[1])
    
    except ValueError:
        print("Time must be an integer")
        sys.exit(1)

    metrics = CollectMetrics()

    start_time = time.time()
    end_time = start_time + time_interval

    collected_data = {
        'Time': [],
        'CPU Percent': [],
        'Memory Percent': []
    }


    try:
        while time.time() < end_time:
            collected_data['Time'].append(time.localtime())
            collected_data['CPU Percent'].append(metrics.cpu_percent())
            collected_data['Memory Percent'].append(metrics.memory_percent())
            print("collected cpu percent", metrics.cpu_percent())
            print("collected memory percent", metrics.memory_percent())
            time.sleep(1)


    except Exception as e:
        print("An error occured", e)

    finally:
        df = pd.DataFrame(collected_data)
        df.to_csv(path_or_buf='./performance_metrics.csv')

if __name__ == "__main__":
    main()
